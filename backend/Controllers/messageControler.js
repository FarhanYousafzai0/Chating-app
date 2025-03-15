
export const postMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id } = req.params;

        // Validation
      
res.json({message:"Message is sent!"})
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
};
