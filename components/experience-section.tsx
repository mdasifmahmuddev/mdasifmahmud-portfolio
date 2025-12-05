export function ExperienceSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <span className="text-primary font-semibold">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Education & Certification</h2>
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science and Engineering</h3>
                <p className="text-primary font-semibold mt-2">Institute of Science & Technology (IST)</p>
                <p className="text-muted-foreground">National University, Bangladesh</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">December 2019 - 2024</span>
            </div>
          </div>

          <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl font-bold">Complete Web Development Course</h3>
                <p className="text-primary font-semibold mt-2">Programming Hero</p>
                <p className="text-muted-foreground">MERN Stack Specialization</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
