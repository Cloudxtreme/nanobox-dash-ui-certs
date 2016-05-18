window.init = () ->

  getKey = () -> "
-----BEGIN CERTIFICATE REQUEST-----
MIIC2DCCAcACAQAwgZIxCzAJBgNVBAYTAlVTMQ4wDAYDVQQIEwVJZGFobzEQMA4G
A1UEBxMHUmV4YnVyZzEPMA0GA1UECgwGbWFpdHJkMRQwEgYDVQQLDAtkZXZlbG9w
bWVudDETMBEGA1UEAwwKbWFpdHJkLmNvbTElMCMGCSqGSIb3DQEJARYWZG9taW5v
LnN0ZXZlQGdtYWlsLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
ALKvjtcoGbIhLERhdLKyTHei16y+LbLgqKSUqGPA+HQsW1JzAk4vPWy0xXCtiLGd
OklF2cnckm/zqPe4I4C1pVvq3AKew9QjY9FxETL/v7rB3u3++ECLcdD/ZDUV6qcv
9o6wEFDMb9J7yvG8+qGLISP1FflXNBrEJmiLUztzstGf3dqbWo42pdP2Ux1jSZt3
IWOohB6BG1QK+cW09ifHj1UUUfrcwbcggpCpvbbA3cSpTbhoa+XkrTjYts1Y7ubn
vI1TBVa3Dg+/0usjJ4WtZfUt/6/vbhI6b4w57fLZUgGJ+NPyFoGb+t1tlyO/Xc6B
VVkAaZRNwUggz25ngXEZ5UcCAwEAAaAAMA0GCSqGSIb3DQEBCwUAA4IBAQCyh+ZK
PXHK+h2jvF4DzBwHtQW1NDxw8RVRW/AMZyWLHxyVobcUudoj4i4rGqvtCSeleXbY
2SI2rC6/Bfi/DDKVaXMkIAecS894Jdf9RfIw/0/9mr8RX5VPtxzRnTaojt6gwHOM
vzeG5QHHGXOlgy2xXeytOEYXB6WRuh5eWwKdFQihRfQklKPEhlNeFm5PcfFc6HI5
6HBWZdiycTqfqv3i918hhG0j26o9MDwjtz0JUYhKNiKvECaG081seJT1oTDTzkAV
Qk6ac+ZML85Xs9O6oOwIBC8UnBDEGj7/E0Tx3Na+S2DqU0OhnN7iGtKp6BWITevB
wB3pPQ/0TcvsJfE0
-----END CERTIFICATE REQUEST-----"

  @options = {
    getKey: getKey
    certs: [
      {domain:"domain.com", state:"incomplete", status:"complete" },
      {domain:"domain.com", state:"installed", status:"complete" },
    ]
  }

  certs = new nanobox.Certs $(".certs"), @options
  certs.build()
