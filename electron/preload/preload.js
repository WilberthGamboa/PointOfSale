const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  getProductByCodeBar: async (barcode) => ipcRenderer.invoke('getProductByCodeBar',barcode),
  saveSale: async (barcode) => ipcRenderer.send('saveVentaIndividual',barcode),
  generarCorte: () => ipcRenderer.send('generarCorte'),
  getCategories: async () => ipcRenderer.invoke('getCategories'),
})