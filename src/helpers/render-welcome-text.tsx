type IRenderWelcomeText = (
  text: string,
  className: string,
  baseWeight?: number
) => React.ReactNode;

const renderWelcomeText: IRenderWelcomeText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} style={{fontVariationSettings: `'wght' ${baseWeight}`}}>
            {char === ' ' ? '\u00A0' : char}
        </span>
    ))
};

export default renderWelcomeText;