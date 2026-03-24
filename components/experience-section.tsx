"use client";
import { motion } from "framer-motion";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { Building2, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Starfish24",
    url: "starfish24.com",
    role: "Java Developer",
    period: "Май 2019 — настоящее время",
    duration: "6 лет 10 месяцев",
    location: "Казань",
    current: true,
    achievements: [
      "Проектирование и разработка микросервисной архитектуры для платформы управления заказами на Spring Boot, Apache Kafka, PostgreSQL, Clickhouse",
      "Реализация высоконагруженного сервиса с ежедневным обновлением 60+ млн записей",
      "Настройка CI/CD пайплайнов в GitLab для автоматизации сборки, тестирования и деплоя Docker-контейнеров в Kubernetes",
      "Организация внутренней среды разработки: деплой MicroK8s кластера на bare-metal серверах",
      "Настройка мониторинга: Prometheus stack, Jaeger, ELK stack, Sentry в Kubernetes",
    ],
  },
  {
    company: "Proved Professionals",
    url: "provedpros.com",
    role: "Back-end Developer",
    period: "Декабрь 2018 — Март 2019",
    duration: "4 месяца",
    location: "Удалённо",
    current: false,
    achievements: [
      "Разработка бизнес-логики backend для мобильного приложения на Spring и PostgreSQL",
      "Улучшение функциональности поиска с использованием Elasticsearch",
      "Деплой и поддержка backend через docker-compose",
    ],
  },
  {
    company: "Freelance (Upwork)",
    url: "upwork.com",
    role: "Java Developer",
    period: "Январь 2018 — Ноябрь 2018",
    duration: "11 месяцев",
    location: "Удалённо",
    current: false,
    achievements: [
      "Fullstack разработка сайтов на Spring Boot с проектированием баз данных",
      "Разработка PDF-генератора на Spring + iTextPDF",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Карьера
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Опыт работы
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-background p-6 md:p-8"
            >
              {exp.current && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">
                    Текущее место
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex-1 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{exp.url}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                    <p className="text-base font-semibold text-primary">{exp.role}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                      <span className="text-border">·</span>
                      <span>{exp.duration}</span>
                      <span className="text-border">·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <MovingBorderButton
            containerClassName="h-14 w-auto px-1"
            className="px-8 text-sm font-medium"
            duration={3000}
            borderClassName="bg-[radial-gradient(#6366f1_40%,transparent_60%)] opacity-80"
            onClick={() => window.open("mailto:demirel6777@gmail.com", "_blank")}
          >
            Связаться со мной
          </MovingBorderButton>
        </motion.div>
      </div>
    </section>
  );
}
