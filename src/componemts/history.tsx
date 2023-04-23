export const History = () => {
  const example = ['yahhoi', 'wahhoi', 'wanndahoi']

  return (
    <div className="mt-10">
      <ul>
        {example.map((example, index) => (
          <li
            key={index}
            className="w-full mb-5 text-white border-y border-white"
          >
            {example}
          </li>
        ))}
      </ul>
    </div>
  )
}
