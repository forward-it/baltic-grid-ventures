import { Wrench } from "lucide-react";

const experience = [
  "Qualification of battery energy storage systems for balancing markets",
  "Integration of energy assets with SCADA and dispatch control systems",
  "Communication with grid operators using IEC-60870-5-104 protocol",
  "Development of energy trading and dispatch optimization systems",
];

const EngineeringExperience = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="max-w-2xl">
          <Wrench className="h-6 w-6 text-accent-brand mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Engineering Experience in Energy Asset Integration
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Members of our engineering team have participated in the qualification and integration of flexible energy assets for participation in electricity markets.
          </p>

          <p className="text-muted-foreground mb-4">Experience includes:</p>
          <ul className="space-y-3">
            {experience.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-accent-brand mt-1 shrink-0">•</span>
                <p className="text-foreground">{item}</p>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mt-8 text-sm">
            This experience forms the foundation of the Forward Power Markets platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringExperience;
