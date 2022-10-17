export type Data = {
  status: boolean
  data: Record<string, unknown>
}
export type Error = { status: false; error: string }

export type Response = Data | Error
