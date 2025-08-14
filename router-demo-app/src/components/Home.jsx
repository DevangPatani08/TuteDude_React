import React from "react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

const Home = () => {
    return (
        <>
            <div className="bg-white">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" >
                        <div  style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}  className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"  />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    <span aria-hidden="true" className="absolute inset-0" /> 
                                    Read more 
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                                Data to enrich your online business
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Get started
                                </a>
                                <a href="/about" className="text-sm/6 font-semibold text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    A better workflow
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-700">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                            {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img alt="Product screenshot" src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png" width={2432} height={1442} className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                        Everything you need to deploy your app
                    </p>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Mobile friendly
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                    </p>
                                </div>
                                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                        <img alt="" src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png" className="size-full object-cover object-top" />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img alt="" src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png" className="w-full max-lg:max-w-xs" />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                    </p>
                                </div>
                                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                    <img alt="" src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png" className="h-[min(152px,40cqw)] object-cover" />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
                        </div>
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Powerful APIs
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                                    </p>
                                </div>
                                <div className="relative min-h-120 w-full grow">
                                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                                        <div className="flex bg-gray-900 outline outline-white/5">
                                            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                    NotificationSetting.jsx
                                                </div>
                                                <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;