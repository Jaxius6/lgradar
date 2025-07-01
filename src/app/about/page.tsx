import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Craig",
    role: "Co-Founder",
    description: "The political genius behind LG Radar. Deep understanding of local government processes and regulatory landscapes.",
  },
  {
    name: "Jack",
    role: "Co-Founder",
    description: "The technical wizard who brings the vision to life. Expert in building scalable compliance monitoring systems.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">LG Radar</h1>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              About LG Radar
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Born from the frustration of manual compliance tracking, LG Radar was created by 
              local government professionals who knew there had to be a better way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  LG Radar was founded in 2023 by a team of local government compliance officers 
                  and software engineers who experienced firsthand the challenges of staying on 
                  top of WA Government Gazettes and regulatory changes.
                </p>
                <p>
                  After countless late nights manually checking gazettes and nearly missing 
                  critical disallowance deadlines, we knew councils deserved better. We built 
                  LG Radar to be the compliance radar every council needs—automated, intelligent, 
                  and always watching.
                </p>
                <p>
                  Today, we&apos;re proud to serve councils across Western Australia, helping them 
                  stay compliant while focusing on what matters most: serving their communities.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To eliminate compliance anxiety for local government professionals by providing 
                  intelligent, automated monitoring of regulatory changes and deadlines.
                </p>
                <p>
                  We believe that compliance should be proactive, not reactive. Our technology 
                  ensures that councils never miss a critical deadline or regulatory change, 
                  giving them the confidence to focus on strategic initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">Meet Our Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-8">
              Join the councils already using LG Radar to stay ahead of compliance requirements.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>Built by compliance professionals and software experts in WA.</p>
          <p>Built in WA. Hosted in Australia. Focused on you.</p>
          <p className="mt-4">ABN: 12 345 678 901</p>
          <p className="mt-2">Made in WA with ❤️</p>
        </div>
      </footer>
    </div>
  );
}