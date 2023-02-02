<template>
  <body>
  <div class="invoice-container">
    <div class="invoice-header">
      <h2>Factura</h2>
      <p>Fecha: 01/30/2023</p>
    </div>
    <div class="contact-info">
      <p>Nombre: {{ nombre }}</p>
      <p>Apellido: {{ apellido }}</p>
      <p>Cédula: {{ cedula }}</p>
      <p>Número de factura: {{ numeroFactura }}</p>
    </div>
    <div class="invoice-body">
      <table>
        <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Polvo Compacto</td>
          <td>2</td>
          <td>$10.00</td>
          <td>$20.00</td>
        </tr>
        <tr>
          <td>Labial Mate</td>
          <td>5</td>
          <td>$5.00</td>
          <td>$25.00</td>
        </tr>
        <tr>
          <td>Delineador Líquido</td>
          <td>1</td>
          <td>$7.00</td>
          <td>$7.00</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="invoice-footer">
      <p>Total: $52.00</p>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "Factura"
}
</script>

<style scoped>
.invoice-container {
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.invoice-header {
  text-align: center;
  margin-bottom: 30px;
}
.invoice-header h2 {
  font-size: 24px;
}
.invoice-header p {
  font-size: 14px;
}
.contact-info {
  text-align: center;
  margin-bottom: 30px;
}
.contact-info p {
  font-size: 14px;
}
.invoice-body {
  width: 100%;
  margin-bottom: 30px;
}
.invoice-body table {
  width: 100%;
  border-collapse: collapse;
}
.invoice-body table th,
.invoice-body table td {
  border: 1px solid #ccc;
  padding: 10px;
}
.invoice-body table th {
  background-color: #f2f2f2;
}
.total-row {
  background-color: #ffc107;
  color: #fff;
  font-weight: bold;
}
.invoice-footer {
  text-align: right;
  font-size: 18px;
}
.invoice-footer p {
  margin-top: 20px;
}

</style>