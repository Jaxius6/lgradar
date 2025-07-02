import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Zap } from "lucide-react";
import Link from "next/link";
import RadarAnimation from "@/components/RadarAnimation";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Daily Email Alerts",
    description: "Summarised WA Gazette updates in your inbox by 8am.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Smart Keyword Matching",
    description: "Highlight key terms and local relevance automatically.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Disallowance Countdown Timers",
    description:
      "Transparent timelines for every piece of subsidiary legislation.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Audit & Action Logs",
    description: "Know who reviewed what — and what’s left.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Shared Dashboard",
    description: "One place for your governance team to stay aligned.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Smart Summaries & Risk Ratings",
    description: "Quickly understand what matters and what to escalate.",
  },
];

const testimonials = [
  {
    quote: "We're saving hours every week. Total peace of mind.",
    author: "CEO, Shire of Coolgardie",
  },
  {
    quote: "As a smaller council, LG Radar is our virtual compliance officer.",
    author: "CEO, Shire of Peppermint Grove",
  },
  {
    quote:
      "The email summaries are brilliant. I read them before anything else.",
    author: "Governance Coordinator, City of Wanneroo",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Zap className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">LG Radar</h1>
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" asChild>
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/privacy">Privacy Policy</Link>
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
        <section className="container mx-auto px-4 py-12 text-center">
          <div className="flex justify-center -mb-8">
            <div className="w-64 h-64">
              <RadarAnimation />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Real-time legislative tracking for WA councils
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay on top of Government Gazettes, Policy Changes and Disallowance Windows — without lifting a finger.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://wa.lgradar.com.au">Start Free Trial</Link>
            </Button>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-10">
              Sound Familiar?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">📄</div>
                <p>Drowning in documents?</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">⏰</div>
                <p>Missed a disallowance notice?</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">📧</div>
                <p>Relying on one person&apos;s inbox?</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">❓</div>
                <p>Unsure if you&apos;re fully compliant?</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            What LG Radar Does
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24">
                      <RadarAnimation />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {index === 0 && "Never miss another critical deadline with automated daily summaries delivered straight to your inbox. Smart filtering identifies content relevant to your council, highlighting key terms and local implications."}
                    {index === 1 && "Smart filtering identifies content relevant to your council, highlighting key terms and local implications. Advanced algorithms ensure you only see what matters to your specific council area."}
                    {index === 2 && "Visual countdown timers for every piece of subsidiary legislation, ensuring you never miss a disallowance window. Transparent timelines keep your team informed and prepared."}
                    {index === 3 && "Complete transparency with detailed logs showing who reviewed what and when, plus clear action items. Export reports and maintain comprehensive audit trails for compliance."}
                    {index === 4 && "Centralized dashboard where your entire governance team can collaborate and stay aligned on compliance matters. Real-time updates keep everyone informed and accountable."}
                    {index === 5 && "Intelligent summaries and risk assessments help you prioritize what needs immediate attention. Smart categorization and risk scoring streamline your workflow."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">
              Why Councils Trust LG Radar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p>&quot;{testimonial.quote}&quot;</p>
                    <p className="mt-4 font-semibold text-right">
                      — {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Pricing Plans</h3>
            <p className="text-xl mt-4 text-muted-foreground">
              Start free, upgrade when ready
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="text-4xl font-extrabold mt-4">$0</div>
                <p className="text-muted-foreground">30 days free trial</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Basic gazette summaries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Up to 3 staff accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Email alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    No credit card required
                  </li>
                </ul>
                <div className="mt-8">
                  <Button size="lg" className="w-full" asChild>
                    <Link href="https://wa.lgradar.com.au">Start Free Trial</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Monthly</CardTitle>
                <div className="text-4xl font-extrabold mt-4">$197</div>
                <p className="text-muted-foreground">/month per council</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Unlimited staff accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Full gazette lists & summaries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Disallowance countdowns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Keyword alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Audit logs & CSV export
                  </li>
                </ul>
                <div className="mt-8">
                  <Button size="lg" className="w-full" asChild>
                    <Link href="https://wa.lgradar.com.au">Sign up</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Annual</CardTitle>
                <div className="text-4xl font-extrabold mt-4">$1,970</div>
                <p className="text-muted-foreground">/year per council</p>
                <p className="text-sm text-green-600 font-medium mt-2">
                  Save 2 months!
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Unlimited staff accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Full gazette lists & summaries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Disallowance countdowns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Keyword alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Audit logs & CSV export
                  </li>
                </ul>
                <div className="mt-8">
                  <Button size="lg" className="w-full" asChild>
                    <Link href="https://wa.lgradar.com.au">Save now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2025 LG Radar. All rights reserved.</p>
          <p className="mt-2">ABN: 803 402 939 44</p>
          <p className="mt-2">Made in WA with ❤️</p>
        </div>
      </footer>
    </div>
  );
}
