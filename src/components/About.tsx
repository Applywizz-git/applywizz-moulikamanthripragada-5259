import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Cloud, Database, GitBranch, Zap, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Counter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-accent">
        {count}
        {suffix}
      </span>
    );
  };

  const stats = [
    { label: "Years Experience", value: 4, suffix: "" },
    { label: "Projects Completed", value: 3, suffix: "+" },
    { label: "Reliable Deployments", value: 100, suffix: "%" },
  ];

  const techIcons = [
    { icon: Cloud, label: "AWS" },
    { icon: GitBranch, label: "Docker" },
    { icon: Server, label: "Kubernetes" },
    { icon: Code2, label: "Terraform" },
    { icon: GitBranch, label: "Jenkins" },
    { icon: Zap, label: "Ansible" },
    { icon: Database, label: "RDS" },
    { icon: Cloud, label: "Git" },
  ];

  return (
    <section id="about" className="py-20 " ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              I'm a DevOps Engineer with 4 years of experience designing and automating cloud infrastructure on Amazon Web Services. I specialize in strengthening production environments, automating build pipelines, and leveraging GitOps patterns to accelerate system delivery.
            </p>
            <p>
              My technical foundation includes Terraform-based Infrastructure as Code, robust CI/CD engineering using Jenkins and Git, and container orchestration with Docker and Amazon EKS. I have hands-on experience deploying scalable applications leveraging EC2, VPC, RDS, Auto Scaling, and Application Load Balancers. I am also skilled in improving system reliability through blue-green deployments, integrating DevSecOps tools like SonarQube and Trivy, and establishing end-to-end observability using Prometheus, Grafana, ELK Stack, and AWS CloudWatch.
            </p>
            <p>
              I'm adept at lowering Mean Time to Resolution, minimizing configuration drift with Ansible, and partnering cross-functionally to support high-availability production environments aligned with Site Reliability Engineering best practices.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-background border-accent/20 hover:border-accent/40 transition-all duration-300">
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </Card>
            ))}
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-4 md:grid-cols-8 gap-4 pt-8"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer"
              >
                <tech.icon className="h-8 w-8 text-accent" />
                <span className="text-xs text-muted-foreground">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
