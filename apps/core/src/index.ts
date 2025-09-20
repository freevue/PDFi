import EmbedPDF from '@pdfi/embedpdf'

type Options = {}
type Props = {
  element: HTMLElement
  options: Options
}

class PDFi extends EmbedPDF {
  constructor(props: Props) {
    super()
  }

  async init() {
    await super.initEmbedPDF()
  }
}

export default PDFi
