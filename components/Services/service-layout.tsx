import { services } from "./service-data"

export default function ServicesLayout() {
    const service = services
    console.log(service)
    // const services: ServiceData[] = serviceData; // Uncomment this line if you have a service data array
    return (
        <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
                <h1>Services</h1>
            </div>
            {
                service.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        {service.map((service) => (
                            <div key={service.id} className=" rounded-lg shadow-md p-4">
                                <img src={service.image} alt={service.name} className="w-full h-32 object-cover rounded-t-lg" />
                                <h2 className="text-xl font-semibold mt-2">{service.name}</h2>
                                <p className="mt-1">{service.desc}</p>
                                <ul className="mt-2 list-disc pl-5">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <p className="text-center py-16 bg-muted rounded-lg mt-8">
                            No services available at the moment.
                        </p>
                    </div>
                )
            }
            {/*  */}
        </div>
    )
}