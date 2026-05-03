interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-text-primary mb-2">{title}</h1>
      {subtitle && (
        <p data-testid="page-subtitle" className="text-text-secondary">
          {subtitle}
        </p>
      )}
      <div className="mt-3 h-0.5 w-12 bg-accent rounded-full" />
    </div>
  )
}
