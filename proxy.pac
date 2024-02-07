function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.pgtools.net")) return "PROXY 192.168.1.196:8080; DIRECT";
  return "DIRECT";
}
