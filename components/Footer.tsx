import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">About Us</h3>
                        <p className="text-sm">
                            Krisha Bhumi is a leading provider of construction services with over 10 years of experience in the
                            industry.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Hybrid Coating</li>
                            <li>Building Painting</li>
                            <li>Water Proofing</li>
                            <li>Construction</li>
                            <li>Renovation</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {currentYear} Krisha Bhumi. All rights reserved.</p>
                    <p className="font-['Moontime'] text-2xl mt-2 md:mt-0">Viv.B</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

