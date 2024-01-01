interface Props {
  firsPhrase: string;
  SecondPhrase: string;
}

const SectionHeading = ({ firsPhrase, SecondPhrase }: Props) => {
  return (
    <div className="container section-heading">
      <p className="h5 text-uppercase text-secondary fw-bold">{firsPhrase}</p>
      <h2 className="text-white fw-black display-4 fw-bold">{SecondPhrase}</h2>
    </div>
  );
};

export default SectionHeading;
