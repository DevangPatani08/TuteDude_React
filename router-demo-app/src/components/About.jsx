import React from 'react';
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <main className="relative isolate overflow-hidden bg-white w-full">
            {/* Background patterns and shapes - these remain the same as they cover the whole page */}
            <svg className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true" >
                <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }} />
            </div>
            
            <div className="relative isolate flex flex-col lg:flex-row px-6 pt-16 lg:pt-32 lg:px-8 items-center justify-between lg:gap-12">
                <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left lg:w-4xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">We’re changing the way people connect</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600"> Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.</p>
                </div>
                <div className="relative lg:mt-0 lg:flex-auto lg:w-xl lg:min-h-[800px] flex items-start justify-end overflow-hidden  transform translate-x-24">
                    <div className="grid grid-cols-3 gap-x-8 w-auto h-full max-w-lg lg:max-w-none">
                        <div className="h-full lg:min-h-[800px] flex flex-col items-center justify-start pt-80">
                            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="Column 1 Image" className="w-64 aspect-[2/3] object-cover rounded-3xl shadow-xl" />
                        </div>
                        <div className="h-full flex flex-col items-center justify-start space-y-6 pt-36">
                            <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="Column 2 Image 1" className="w-64 aspect-[2/3] object-cover rounded-2xl shadow-md" />
                            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="Column 2 Image 2" className="w-64 aspect-[2/3] object-cover rounded-2xl shadow-md" />
                        </div>
                        <div className="flex flex-col items-center justify-start space-y-6">
                            <img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="Column 3 Image 1" className="w-64 aspect-[2/3] object-cover rounded-2xl shadow-md" />
                            <img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="Column 3 Image 2" className="w-64 aspect-[2/3] object-cover rounded-2xl shadow-md" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 w-full">
                <div className="mx-auto lg:mx-0 w-full">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
                    <div className="mt-6 text-lg leading-8 text-gray-700 md:grid md:grid-cols-2 md:gap-x-8 space-x-5">
                        <div>
                            <p>
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                            </p>
                            <p className="mt-8">
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                            </p>
                        </div>
                        <dl className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8 w-full lg:px-28 sm:px-8">
                            <div>
                                <dd className="mt-2 mb-4 text-6xl font-bold leading-10 tracking-tight text-gray-900">
                                    44 million
                                </dd>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    Transactions every 24 hours
                                </dt>
                            </div>
                            <div>
                                <dd className="mt-2 mb-4 text-6xl font-bold leading-10 tracking-tight text-gray-900">
                                    $119 trillion
                                </dd>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    Assets under holding
                                </dt>
                            </div>
                            <div>
                                <dd className="mt-2 mb-4 text-6xl font-bold leading-10 tracking-tight text-gray-900">
                                    46,000
                                </dd>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    New users annually
                                </dt>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div className="mt-32 sm:mt-24 w-full xl:mx-auto xl:max-w-full xl:px-8 sm:px-0">
                <img alt="" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" className="aspect-[1155/678] w-full object-cover xl:rounded-3xl" />
            </div>
            
            <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div>
                        <dt className="font-semibold text-gray-900">Be world-class</dt>
                        <dd className="mt-1 text-gray-600">
                            Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-gray-900">Share everything you know</dt>
                        <dd className="mt-1 text-gray-600">
                            Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-gray-900">Always learning</dt>
                        <dd className="mt-1 text-gray-600">
                            Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-gray-900">Be supportive</dt>
                        <dd className="mt-1 text-gray-600">
                            Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-gray-900">Take responsibility</dt>
                        <dd className="mt-1 text-gray-600">
                            Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur doloremiure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-gray-900">Enjoy downtime</dt>
                        <dd className="mt-1 text-gray-600">
                            Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.
                        </dd>
                    </div>
                </dl>
            </div>
            
            <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by the world’s most innovative teams</h2>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img alt="Transistor" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" width="158" height="48" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                    <img alt="Reform" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" width="158" height="48" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                    <img alt="Tuple" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" width="158" height="48" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                    <img alt="SavvyCal" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" width="158" height="48" className="col-span-2 max-h-12 w-full object-contain sm:col-span-2 lg:col-span-1" />
                    <img alt="Statamic" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" width="158" height="48" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                </div>
            </div>
            
            <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
                </div>
                <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Michael Foster</h3>
                        <p className="text-sm leading-6 text-gray-600">Co-Founder / CTO</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Dries Vincent</h3>
                        <p className="text-sm leading-6 text-gray-600">Business Relations</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Lindsay Walton</h3>
                        <p className="text-sm leading-6 text-gray-600">Front-end Developer</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Courtney Henry</h3>
                        <p className="text-sm leading-6 text-gray-600">Designer</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Tom Cook</h3>
                        <p className="text-sm leading-6 text-gray-600">Director of Product</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Whitney Francis</h3>
                        <p className="text-sm leading-6 text-gray-600">Copywriter</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Leonard Krasner</h3>
                        <p className="text-sm leading-6 text-gray-600">Senior Designer</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Floyd Miles</h3>
                        <p className="text-sm leading-6 text-gray-600">Principal Designer</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Emily Selman</h3>
                        <p className="text-sm leading-6 text-gray-600">VP, User Experience</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Kristin Watson</h3>
                        <p className="text-sm leading-6 text-gray-600">VP, Human Resources</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Emma Dorsey</h3>
                        <p className="text-sm leading-6 text-gray-600">Senior Developer</p>
                    </li>
                    <li>
                        <img alt="" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" className="mx-auto h-24 w-24 rounded-full" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Alicia Bell</h3>
                        <p className="text-sm leading-6 text-gray-600">Junior Copywriter</p>
                    </li>
                </ul>
            </div>
            
            <div className="mx-auto mt-32 max-w-7xl px-6 pb-20 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <article className="flex flex-col items-start justify-between">
                        <div className="relative w-full">
                            <img alt="" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                        </div>
                        <div className="max-w-xl">
                            <div className="mt-8 flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">
                                    Mar 16, 2020
                                </time>
                                <div className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    Marketing
                                </div>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <NavLink to="/">
                                        <span className="absolute inset-0"></span>
                                        Vel expedita assumenda placeat aut nisi optio voluptates quas
                                    </NavLink>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae autem anii. Eos omnis temporibus ad reiciendis culpa.
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img alt="" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <NavLink to="/">
                                            <span className="absolute inset-0"></span>
                                            Michael Foster
                                        </NavLink>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col items-start justify-between">
                        <div className="relative w-full">
                            <img alt="" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime="2020-03-10" className="text-gray-500">
                                        Mar 10, 2020
                                    </time>
                                    <div className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    Sales
                                    </div>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <NavLink to="/">
                                            <span className="absolute inset-0"></span>
                                            Libero quisquam voluptatibus nam iusto qui dolor
                                        </NavLink>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                        Aut enim sit destinctio. Voluptatem sit sed omnis. Quos reiciendis non voluptatibus soluta. Autem et enim occaecati laudantium.
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <NavLink to="/">
                                                <span className="absolute inset-0"></span>
                                                Lindsay Walton
                                            </NavLink>
                                        </p>
                                        <p className="text-gray-600">Front-end Developer</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img alt="" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime="2020-02-12" className="text-gray-500">
                                        Feb 12, 2020
                                    </time>
                                    <div className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        Product
                                    </div>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <NavLink to="/">
                                            <span className="absolute inset-0"></span>
                                            Asperiores mollitia et dolor autem modi sit eius quisquam
                                        </NavLink>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                        Temporibus ipsum ut reiciendis. Doloremque possimus aut. Voluptatibus ipsum omnis. Nihil impedit ipsum quas.
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <NavLink to="/">
                                                <span className="absolute inset-0"></span>
                                                Tom Cook
                                            </NavLink>
                                        </p>
                                        <p className="text-gray-600">Director of Product</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
        </main>
    );
}

export default About;