function domainName(url) {
    
    url = url.replace(/(https?:\/\/|www\.)/gi, '');
    
    let parts = url.split(/\/|\./);
    
    return parts.find(part => part.length > 0);
}