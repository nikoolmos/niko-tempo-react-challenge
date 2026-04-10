import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { NoteList } from "../components/NoteList.component"

const pageStyles = {
  fontFamily: "Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
     <NoteList />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Niko's Sticky Note App</title>
