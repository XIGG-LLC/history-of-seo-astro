export async function ImageResolver(src) {
    const fileExtIndex = src.lastIndexOf('.');
    const fileName = src.substring(0, fileExtIndex);
    const fileExt = src.substring(fileExtIndex);
    let file = null;
    
    switch (fileExt.toLowerCase()) {
        case '.jpg':
            file = (await import(`${fileName}.jpg`)).default;
            break;
        case '.jpeg':
            file = (await import(`${fileName}.jpeg`)).default;
            break;
        case '.gif':
            file = (await import(`${fileName}.gif`)).default;
            break;
        case '.png':
            file = (await import(`${fileName}.png`)).default;
            break;
        default: 
            file = (await import(`${fileName}.jpg`)).default;
    }
    return file;
};

