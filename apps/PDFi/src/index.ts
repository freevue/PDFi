import EmbedPDF from '@pdfi/embedpdf'

type Props = {}

class PDFi extends EmbedPDF {
  constructor(props: Props) {
    super()
  }

  async init() {
    await super.initEmbedPDF()
  }
}

export default PDFi
