
function ipv4Parser(ip, subnet) {
    const ipOctets = ip.split('.').map(Number);
    const subnetOctets = subnet.split('.').map(Number);

    let networkOctets = [];
    let hostOctets = [];
    
    for (let i = 0; i < 4; i++) {
       
        networkOctets.push(ipOctets[i] & subnetOctets[i]);
       
        hostOctets.push(ipOctets[i] - networkOctets[i]);
    }

    const networkBlock = networkOctets.join('.');
    const hostIdentifier = hostOctets.join('.');

    return [networkBlock, hostIdentifier];
}

module.exports = { ipv4Parser };