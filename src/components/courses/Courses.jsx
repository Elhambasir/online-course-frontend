
const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories for the long haul',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
    fee:'$100'
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking tools for your personal growth',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
    fee:'$150'
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials for the modern traveler',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    fee:'$200'
  },
]

export default function Course() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-gray-400 text-left text-sm">12 Lessons/ 4 week</p>
                  <h3 className="text-sm text-left font-medium text-gray-700">
                    <a href={callout.href}>
                      <span aria-hidden="true" className="absolute inset-0 font-medium" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-left text-gray-500">{callout.description}</p>
                </div>
                <p className="text-sm font-medium py-2 px-2 text-gray-100 bg-red-600 absolute top-0 right-0 ">{callout.fee}</p>
              </div>
                <div className="flex mt-2 relative bottom-0 left-0 text-gray-400">
                    <p className="relative bottom-0  left-0 mr-1">102 students</p>
                    <p className="relative bottom-0  right-0 ml-1">40 comments</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
