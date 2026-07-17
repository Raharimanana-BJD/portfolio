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
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{issuer}</p>
        </div>
        <Award className="w-5 h-5 text-primary shrink-0" />
      </div>
      {/* Date */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4" />
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
    <section className="px-0 max-md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-16 bg-linear-to-r from-primary to-primary-foreground rounded" />
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-col gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
