const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  getProductByCodeBar: async (barcode) => ipcRenderer.invoke('getProductByCodeBar',barcode),
  saveSale: async (barcode) => ipcRenderer.send('saveVentaIndividual',barcode),
  generarCorte: () => ipcRenderer.send('generarCorte'),
  getCategories: async () => ipcRenderer.invoke('getCategories'),
  saveNewProduct : async (data) =>ipcRenderer.invoke('saveNewProduct',data),
  getProductByCodeBarWithCategory:async (data) => ipcRenderer.invoke('getProductByCodeBarWithCategory',data)
})