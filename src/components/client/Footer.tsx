
const Footer = () => {
    return (
        <footer className="bg-green-900 text-white">
            <div className="mx-auto p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <p>
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-facebook" /></a>
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-twitter" /></a>
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-instagram" /></a>
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-youtube" /></a>
                            <a href="#"><i className="mr-4 fa-brands fa-lg fa-tiktok" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Um</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Kontaktiere Uns</a></li>
                            <li><a href="#" className="hover:underline">Über Uns</a></li>
                            <li><a href="#" className="hover:underline">Karriere</a></li>
                            <li>
                                <a href="#" className="hover:underline">Unternehmensinformationen</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Hilfe</h3>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">Unsere Produzenten</a>
                            </li>
                            <li><a href="#" className="hover:underline">Zahlung</a></li>
                            <li><a href="#" className="hover:underline">Versand</a></li>
                            <li>
                                <a href="#" className="hover:underline">Stornierung &amp; Rückgabe</a>
                            </li>
                            <li><a href="#" className="hover:underline">Verstoß Melden</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">politik</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Rücknahmegarantie</a></li>
                            <li>
                                <a href="#" className="hover:underline">Nutzungsbedingungen</a>
                            </li>
                            <li><a href="#" className="hover:underline">Sicherheit</a></li>
                            <li><a href="#" className="hover:underline">Privatsphäre</a></li>
                            <li><a href="#" className="hover:underline">Seitenverzeichnis</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex justify-between items-center border-t border-green-800 pt-4">
                    <p>2023 hood.de, Inc.</p>
                    <div className="flex space-x-4">
                        <img src="src/assets/img/pay.png" alt="MasterCard" className="h-6" />
                    </div>
                    <a href="#" className="text-white hover:underline">Scroll to top ↑</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer