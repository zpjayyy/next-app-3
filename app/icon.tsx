import {ImageResponse} from "next/og";

export const runtime = "edge"

export const size = {
  width: 48,
  height: 48
}

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        fontSize: 24,
        background: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}>
        A
      </div>
    ),
    {
      ...size,
    }
  )
}