import { PDFIUM_WASM_URL } from './constant'
import { init, WrappedPdfiumModule } from '@embedpdf/pdfium'
import { pipe } from '@fxts/core'

class EmbedPDF {
  private pdfiumInstance: WrappedPdfiumModule | null = null

  async initEmbedPDF() {
    await pipe(
      fetch(PDFIUM_WASM_URL),
      (response) => response.arrayBuffer(),
      (wasmBinary) => init({ wasmBinary }),
      (pdfiumInstance) => {
        this.pdfiumInstance = pdfiumInstance
        this.pdfiumInstance.PDFiumExt_Init()
      }
    )
  }
}

export default EmbedPDF
