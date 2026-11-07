import { Award, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  skills?: string[];
}

function CertificateCard({
  title,
  issuer,
  date,
  description,
  skills = [],
}: CertificateCardProps) {
  return (
    <div>
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm">{issuer}</p>
        </div>
        <Award className="h-5 w-5 shrink-0 text-primary" />
      </div>
      {/* Date */}
      <div className="mb-4 flex items-center gap-2 text-muted-foreground text-sm">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
      </div>

      {/* Description */}
      {description && (
        <p className="mb-4 text-foreground text-sm leading-relaxed">
          {description}
        </p>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

interface AcademicSectionProps {
  title?: string;
  certificates: CertificateCardProps[];
  subtitle?: string;
}

export default function AcademicSection({
  title = "Formation & Certifications",
  certificates,
  subtitle,
}: AcademicSectionProps) {
  return (
    <section className="px-0 py-16 max-md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="mb-2 font-bold text-xl">{title}</h2>
          <div className="h-1 w-16 rounded bg-linear-to-r from-primary to-primary-foreground" />
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-col gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={`${cert.title}-${cert.issuer}`} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
