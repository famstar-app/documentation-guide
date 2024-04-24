import Image from 'next/image'

export default {
  logo: <Image src="/famstar-logo.png" alt="famstar logo" width={80} height={61} />,
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  search: {
    placeholder: 'Suchen',
  },
  editLink: {
    text: 'Bearbeite diese Seite'
  },
  feedback: {
    content: 'Fragen? Sende uns ein Feedback →',
  },
  footer: {
    text: (
      <span>
        ©{' '}{new Date().getFullYear()} Kitamia GmbH
      </span>
    )
  },
}