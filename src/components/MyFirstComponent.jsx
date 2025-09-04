export default function MyFirstComponent()
{
    const person = {
        name:"radwa",
        email:"radwa@gmail.com",
    };
    return(
        <div>
            <div>
                <h1>
                    Hello Radwa
                    your information is {person.name} and {person.email}
                </h1>
            </div>

        </div>

    );
}