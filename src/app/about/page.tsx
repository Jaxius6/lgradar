import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Craig",
    role: "Co-Founder",
    description: "The political genius behind LG Radar. Deep understanding of local government processes and regulatory landscapes.",
    image: "/craig.png",
  },
  {
    name: "Jack",
    role: "Co-Founder",
    description: "The technical wizard who brings the vision to life. Expert in building scalable compliance monitoring systems.",
    image: "/jack.png",
  },
  {
    name: "Tilly",
    role: "Legal, Data & Compliance",
    description: "Expert in legal frameworks, data analysis, and compliance requirements. Ensures LG Radar meets all regulatory standards.",
    image: "/tilly.png",
  },
];

export default function AboutPage() {
  return (
    <>
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

          <div className="flex justify-center mb-12">
            <Image
              src="/papers.png"
              alt="Papers"
              width={600}
              height={400}
              className="object-contain"
            />
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
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{member.name}</CardTitle>
                        <p className="text-foreground font-semibold">{member.role}</p>
                      </div>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="rounded-full object-cover team-member-image"
                      />
                    </div>
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
    </>
  );
}