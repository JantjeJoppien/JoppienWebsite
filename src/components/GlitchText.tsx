type Props = {
  text: string
  color: string
  dark: boolean
}

export default function GlitchText({ text, color, dark }: Props) {
  return (
    <h1
      className={`glitch-text ${dark ? 'glitch-text--dark' : 'glitch-text--light'}`}
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
