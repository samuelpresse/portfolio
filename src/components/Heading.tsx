interface Props {
  firstWord: string;
  secondWord: string;
}

const Heading = ({ firstWord, secondWord }: Props) => {
  return (
    <div className="heading hero-text">
      <h1>
        &lt;
        {firstWord}
        <span>{secondWord}/&gt;</span>
      </h1>
    </div>
  );
};

export default Heading;
