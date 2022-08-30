import wait from "waait"

export class userService {
    async getUser() {
        await wait(200)
        return {
            id: 1,
            username: "andreas "
        }
    }
}