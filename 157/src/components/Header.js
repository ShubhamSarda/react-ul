export const Header = ({heading, subHeading}) => {
  return (
    <section className="header">
        <h1 data-testid="heading">{heading}</h1>
        <p data-testid="subHeading">{subHeading}</p>
    </section>
  )
}
