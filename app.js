const orderCaveConfig = { serverId: 5631, active: true };

const orderCaveHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5631() {
    return orderCaveConfig.active ? "OK" : "ERR";
}

console.log("Module orderCave loaded successfully.");