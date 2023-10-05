const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  getProductByCodeBar: async (barcode) => ipcRenderer.invoke('getProductByCodeBar',barcode)
})