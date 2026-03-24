type Props = {
  text: string
  color: string
}

export default function GlitchText({ text, color }: Props) {
  return (
    <h1
      className="glitch-text"
      aria-label={text}
      style={{
        color,
        marginBottom: 32,
      }}
    >
      <span className="glitch-text__base">{text}</span>
      <span className="glitch-text__layer glitch-text__layer--primary" aria-hidden="true">
        {text}
      </span>
      <span className="glitch-text__layer glitch-text__layer--secondary" aria-hidden="true">
        {text}
      </span>
    </h1>
  )
}
