import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";
import Link from "next/link";

const privacyPrinciples = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Data Protection",
    description: "Your data is encrypted and stored securely in Australian data centers.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Transparency",
    description: "We clearly explain what data we collect and how we use it.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Access Control",
    description: "Only authorized personnel can access your council's information.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Your Rights",
    description: "You maintain full control over your data and can request deletion anytime.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-bold">LG Radar</h1>
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              Privacy Policy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your privacy is fundamental to our service. This policy explains how we collect, 
              use, and protect your information when you use LG Radar.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: July 1, 2025
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Our Privacy Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyPrinciples.map((principle, index) => (
                <Card key={index}>
                  <CardHeader>
                    {principle.icon}
                    <CardTitle className="mt-4 text-lg">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Information</h4>
                  <p className="text-muted-foreground">
                    When you create an account, we collect your name, email address, council/organization 
                    name, and contact details.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Usage Data</h4>
                  <p className="text-muted-foreground">
                    We collect information about how you use our service, including pages visited, 
                    features used, and time spent on the platform.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Council Data</h4>
                  <p className="text-muted-foreground">
                    We process publicly available government gazette information and your council&apos;s 
                    compliance tracking preferences and notes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Delivery</h4>
                  <p className="text-muted-foreground">
                    To provide compliance monitoring, email alerts, and dashboard functionality 
                    tailored to your council&apos;s needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Communication</h4>
                  <p className="text-muted-foreground">
                    To send you service updates, compliance alerts, and respond to your inquiries.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Improvement</h4>
                  <p className="text-muted-foreground">
                    To analyze usage patterns and improve our service quality and features.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Data Storage and Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Australian Hosting</h4>
                  <p className="text-muted-foreground">
                    All data is stored in secure data centers within Australia, ensuring compliance 
                    with Australian privacy laws.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Encryption</h4>
                  <p className="text-muted-foreground">
                    Data is encrypted both in transit and at rest using industry-standard encryption protocols.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Access Controls</h4>
                  <p className="text-muted-foreground">
                    Strict access controls ensure only authorized personnel can access your data, 
                    and all access is logged and monitored.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information only in these limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>With trusted service providers who assist in delivering our service (under strict confidentiality agreements)</li>
                  <li>To protect the rights, property, or safety of LG Radar, our users, or the public</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Under Australian privacy law, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to enhance your experience and analyze usage. 
                  You can control cookie settings through your browser preferences.
                </p>
                <p className="text-muted-foreground">
                  We use analytics tools to understand how our service is used, but all data is 
                  aggregated and anonymized.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We retain your personal information only as long as necessary to provide our services 
                  and comply with legal obligations. When you cancel your account, we will delete your 
                  personal information within 30 days, unless required to retain it by law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any 
                  material changes by email and by posting the updated policy on our website. 
                  Your continued use of our service after such changes constitutes acceptance of the new policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> lgradarwa@gmail.com.au</p>
                  <p><strong>Phone:</strong> +61 427 931 745</p>
                  <p><strong>Address:</strong> Level 5, 123 St Georges Terrace, Perth WA 6000</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
            <p className="text-muted-foreground mb-8">
              Our team is here to help you understand how we protect your data.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} LG Radar. All rights reserved.</p>
          <p className="mt-2">ABN: 803 402 939 44</p>
          <p className="mt-2">Made in WA with ❤️</p>
        </div>
      </footer>
    </div>
  );
}