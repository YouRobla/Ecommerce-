const FooterBottom = () => {
    return (
        <section className="w-full bg-[#F0F0F0] font-satoshi-light pt-24 ">
            <section className="flex flex-wrap p-6 px-14 text-left gap-6" >
                <div className="flex-1 min-w-[200px]   ">
                    <h3 className="font-integral-cf-bold text-3xl pb-5">
                        SHOP.CO
                    </h3>
                    <p >
                        We have clothes that suit your style and which you’re proud to wear. From women to men.
                    </p>
                </div>
                {[
                    { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
                    { title: "HELP", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
                    { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
                    { title: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
                ].map((section, index) => (
                    <div key={index} className="flex-1 min-w-[150px]  ">
                        <h4 className="pb-4 font-satoshi-bold text-lg">{section.title}</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            {section.links.map((link, idx) => (
                                <li key={idx}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <p className="text-center py-4 text-sm ">
            <span className="block mx-auto border-t-2 border-gray-300 w-3/4 mb-5"></span>
                Shop.co © 2000-2023, All Rights Reserved
            </p>
        </section>
    );
};

export default FooterBottom;
