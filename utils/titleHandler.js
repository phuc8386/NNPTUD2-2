module.exports = {
    ConvertTitleToSlug: function (title) {
        if (typeof title !== 'string') {
            return '';
        }

        // Normalize Vietnamese (remove diacritics) + lowercase
        let result = title
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'd')
            .toLowerCase();

        // Replace special characters with '-' and collapse duplicates
        result = result
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');

        return result;
    }
}
