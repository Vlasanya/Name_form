const getPradictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json()
}
const getPradictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json()
}
const getPradictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json()
}
interface Params{
    params: { name: string};
}


export default async function Page({ params }: Params) {
    const ageData = getPradictedAge(params.name)
    const genderData = getPradictedGender(params.name)
    const countryData = getPradictedCountry(params.name)

    const [age, gender, country] = await Promise.all([ ageData, genderData, countryData ])
    return (
        <>
        <div>
            <div>Personal Info</div>
            <div>Age: {age?.age}</div>
            <div>Gender: {gender?.gender}</div>
            <div>Country: {country?.country[0]?.country_id}</div>
        </div>
        </>
    )
}