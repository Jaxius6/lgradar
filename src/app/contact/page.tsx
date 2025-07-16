'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';

interface CaptchaData {
  question: string;
  answer: number;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    council: '',
    message: '',
    captchaAnswer: ''
  });
  
  const [captcha, setCaptcha] = useState<CaptchaData>({ question: '', answer: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showForm, setShowForm] = useState(true);

  // Generate a simple math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let answer: number;
    let question: string;
    
    switch (operation) {
      case '+':
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case '-':
        // Ensure positive result
        const larger = Math.max(num1, num2);
        const smaller = Math.min(num1, num2);
        answer = larger - smaller;
        question = `${larger} - ${smaller}`;
        break;
      case '*':
        answer = num1 * num2;
        question = `${num1} × ${num2}`;
        break;
      default:
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
    }
    
    setCaptcha({ question, answer });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Function to trigger confetti animation
  const triggerConfetti = () => {
    // Create multiple confetti bursts for a celebration effect
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Left side confetti
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      
      // Right side confetti
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captcha
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setShowForm(false); // Hide the form on successful submission
        triggerConfetti(); // Trigger confetti animation
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit form');
        if (result.error?.includes('captcha')) {
          generateCaptcha(); // Generate new captcha on captcha error
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your compliance monitoring? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:lgradarwa@gmail.com.au"
                    className="text-primary hover:underline"
                  >
                    lgradarwa@gmail.com.au
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+61427931745"
                    className="text-primary hover:underline"
                  >
                    +61 427 931 745
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">West Perth, WA</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {showForm ? 'Send us a Message' : 'Message Sent!'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && !showForm && (
                  <div className="text-center py-8">
                    <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-lg">
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Thank you for reaching out!
                      </h3>
                      <p className="text-green-700 mb-4">
                        Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setShowForm(true);
                          setSubmitStatus('idle');
                          setFormData({
                            name: '',
                            email: '',
                            council: '',
                            message: '',
                            captchaAnswer: ''
                          });
                          generateCaptcha();
                        }}
                        variant="outline"
                        className="mt-2"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                )}

                {showForm && (
                  <>
                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-800 text-center">
                          {errorMessage}
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="council" className="block text-sm font-medium mb-2">
                          Council/Organization
                        </label>
                        <input
                          type="text"
                          id="council"
                          name="council"
                          value={formData.council}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Tell us how we can help..."
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="captchaAnswer" className="block text-sm font-medium mb-2">
                          Human Verification: What is {captcha.question}? *
                        </label>
                        <input
                          type="number"
                          id="captchaAnswer"
                          name="captchaAnswer"
                          value={formData.captchaAnswer}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Enter the answer"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
    </>
  );
}