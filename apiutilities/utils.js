const validateString = (message, limit) => {
    if (message.length <= limit) {
        return message;
    } else {
        let messagePost = [];
        while (message.length > 0) {
            messagePost.push(message.substr(0, message.lastIndexOf(' ', limit)));
            // console.log("msg len => ",msg.length)
            // console.log("iteration => ",lastindex,message.length - lastindex);
            message = message.substr(limit, message.length);
            // console.log("message => ",message)
        }
        return messagePost;
    }
}

module.exports.validateString = validateString;