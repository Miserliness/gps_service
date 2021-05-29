export default {
    async getUser({commit}) {
        const res = await fetch('http://164.90.171.231:8080/api/user', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
    }
}