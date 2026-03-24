"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import {
  Code2,
  Database,
  Container,
  GitBranch,
  Server,
  Activity,
  Cloud,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Java & Spring",
    description: "Java 8–17, Spring Boot, Spring Cloud, Spring Data, REST API, Maven",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Базы данных",
    description: "PostgreSQL, Clickhouse, Elasticsearch — оптимизация SQL запросов, проектирование схем",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Apache Kafka",
    description: "Проектирование event-driven систем, обработка 60+ млн записей в сутки",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    icon: <Container className="h-5 w-5" />,
    title: "Kubernetes & Docker",
    description: "MicroK8s, Helm charts, Docker, docker-compose, bare-metal деплой",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Мониторинг",
    description: "Prometheus, Grafana, Jaeger, Sentry, ELK stack (Elasticsearch, Logstash, Kibana)",
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "CI/CD",
    description: "GitLab CI/CD, Jenkins — автоматизация сборки, тестирования и деплоя Docker-контейнеров",
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]",
  },
];

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  area: string;
}

const SkillCard = ({ icon, title, description, area }: SkillCardProps) => (
  <li className={cn("min-h-[12rem] list-none", area)}>
    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 text-foreground">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  </li>
);

export function SkillsSection() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Технологии
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Стек технологий
          </h2>
        </motion.div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}
