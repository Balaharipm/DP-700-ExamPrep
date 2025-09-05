// DP-700 Flashcards Data
const flashcards = [
    {
        id: 1,
        question: "What are the three main categories of questions on the DP-700 exam?",
        answer: "Implementing and managing analytic solutions, ingesting and transforming data, and monitoring and optimizing analytic solutions (with roughly equal weighting)."
    },
    {
        id: 2,
        question: "Why is the DP-700 certification valuable for data engineers?",
        answer: "It provides a structured way to learn, demonstrates foundational expertise, helps with job prospects and pay (especially in consultancies), and recognizes in-demand data engineering skills."
    },
    {
        id: 3,
        question: "What skills are increasingly important for data engineers due to current market trends?",
        answer: "Skills in data engineering for both BI and AI, as organizations require reliable, well-structured data for decision making and AI applications."
    },
    {
        id: 4,
        question: "What is orchestration in Microsoft Fabric, and what tools are commonly used?",
        answer: "Orchestration refers to automating and managing data workflows. Tools include data pipelines, notebooks, Airflow integration, and using activities to trigger data movement, transformation, and model refreshes."
    },
    {
        id: 5,
        question: "What are key differences between Lakehouse, Warehouse, and Eventhouse in Fabric?",
        answer: "Lakehouse: Optimized for Spark code, unstructured and structured data, file & table storage. Warehouse: SQL-based, structured/tabular data, supports transactions. Eventhouse: Real-time, KQL (Kusto), for streaming data and time-series/events."
    },
    {
        id: 6,
        question: "How is access control managed in Microsoft Fabric?",
        answer: "Access can be granted at multiple levels: workspace, item, object, row, and column (with roles like Admin, Member, Contributor, Viewer)."
    },
    {
        id: 7,
        question: "What is the principle of 'least privilege', and how does it apply to Fabric security?",
        answer: "Give users only the minimum access necessary for their job—share at the lowest required level (item/object) instead of the workspace when possible."
    },
    {
        id: 8,
        question: "What methods can you use for ingestion and transformation in Fabric?",
        answer: "Data pipelines (orchestration, basic transformations), data flows (Power Query/M), notebooks (Spark/PySpark), T-SQL (for warehouses), shortcuts and mirroring (for minimal development)."
    },
    {
        id: 9,
        question: "When should you use 'shortcuts' or 'mirroring' in Fabric?",
        answer: "When you want to avoid ETL and just expose or replicate external datasets (like S3, ADLS) directly into a Lakehouse."
    },
    {
        id: 10,
        question: "What is 'Dynamic Data Masking,' and what is its purpose?",
        answer: "A feature to obfuscate sensitive data in result sets, using masking functions (default, email, random, partial) when querying via T-SQL, but not a substitute for access control."
    },
    {
        id: 11,
        question: "What are common orchestration patterns in Fabric Data Pipelines?",
        answer: "Patterns include full load, incremental load, metadata-driven loops (for scalable ingestion), parent-child pipeline invocation, error handling with notifications, and using session tags for Spark resource optimization."
    },
    {
        id: 12,
        question: "What should you know about version control (Git) in Fabric?",
        answer: "Only some artifacts are tracked (not data, files, or refresh schedules), and deployment pipelines rely on source control for repeatability. Know how to set up and connect Fabric workspaces to Azure DevOps or GitHub."
    },
    {
        id: 13,
        question: "What is SCD Type 2, and why is it used?",
        answer: "Slowly Changing Dimension Type 2 tracks historical changes to dimensional data by inserting new rows for changes and maintaining valid from/to dates."
    },
    {
        id: 14,
        question: "What is the purpose of sensitivity labels and endorsements (e.g., Certified, Master Data) in Fabric?",
        answer: "They help with data governance by identifying, protecting, and promoting high-quality and core datasets for compliance and organizational trust."
    },
    {
        id: 15,
        question: "Name three types of window aggregations in event/streaming data in Fabric.",
        answer: "Tumbling window (fixed, non-overlapping), Hopping window (fixed, overlapping), and Sliding window (overlapping, moving continuously)."
    },
    {
        id: 16,
        question: "What is the primary purpose of Microsoft Fabric?",
        answer: "Microsoft Fabric is an all-in-one analytics solution for enterprises that covers everything from data movement to data science, Real-Time Analytics, and business intelligence (BI)."
    },
    {
        id: 17,
        question: "Explain the concept of OneLake in Microsoft Fabric.",
        answer: "OneLake is a single, unified, logical data lake for the entire organization within Microsoft Fabric. It eliminates data silos and provides a single source of truth for all data."
    },
    {
        id: 18,
        question: "What are the different personas supported by Microsoft Fabric?",
        answer: "Data Engineer, Data Scientist, Data Warehouse Developer, Business Intelligence Professional, and Data Analyst."
    },
    {
        id: 19,
        question: "How does Microsoft Fabric support real-time analytics?",
        answer: "Through its Eventhouse and Real-Time Analytics capabilities, which allow for ingestion, processing, and analysis of streaming data using Kusto Query Language (KQL)."
    },
    {
        id: 20,
        question: "What is a Lakehouse in Microsoft Fabric, and what are its advantages?",
        answer: "A Lakehouse is an architecture that combines the best features of data lakes and data warehouses. It offers flexibility for unstructured data like a data lake and the ACID transactions and schema enforcement of a data warehouse."
    },
    {
        id: 21,
        question: "Describe the role of Data Pipelines in Microsoft Fabric.",
        answer: "Data Pipelines are used for orchestrating and automating data movement and transformation activities, enabling the creation of robust ETL/ELT workflows."
    },
    {
        id: 22,
        question: "What is the significance of Spark in Microsoft Fabric?",
        answer: "Spark is a core compute engine in Fabric, especially within Lakehouses and Notebooks, used for large-scale data processing, transformation, and analytics."
    },
    {
        id: 23,
        question: "How does Microsoft Fabric ensure data security and compliance?",
        answer: "Through features like role-based access control (RBAC), row-level security (RLS), column-level security (CLS), dynamic data masking, and sensitivity labels."
    },
    {
        id: 24,
        question: "What is the purpose of Dataflows Gen2 in Microsoft Fabric?",
        answer: "Dataflows Gen2 are used for self-service data preparation and transformation, leveraging Power Query (M language) to ingest and transform data from various sources."
    },
    {
        id: 25,
        question: "How can you monitor data engineering solutions in Microsoft Fabric?",
        answer: "Monitoring can be done through Fabric's monitoring hub, Spark UI, Kusto Query Language (KQL) for real-time analytics, and integration with Azure Monitor and Log Analytics."
    },
    {
        id: 26,
        question: "What is the difference between a Data Warehouse and a Lakehouse in Fabric in terms of data storage?",
        answer: "A Data Warehouse in Fabric primarily stores structured, tabular data optimized for SQL queries, while a Lakehouse stores both structured and unstructured data in open formats like Parquet, optimized for Spark."
    },
    {
        id: 27,
        question: "Explain the concept of shortcuts in Microsoft Fabric.",
        answer: "Shortcuts allow you to create a logical link to data stored in other locations (e.g., Azure Data Lake Storage Gen2, Amazon S3) without physically moving or duplicating the data into OneLake."
    },
    {
        id: 28,
        question: "What is the role of notebooks in Microsoft Fabric?",
        answer: "Notebooks provide an interactive environment for data engineers and data scientists to write and execute code (Python, Scala, Spark SQL, R) for data exploration, transformation, and model training."
    },
    {
        id: 29,
        question: "How does version control integrate with Microsoft Fabric?",
        answer: "Fabric workspaces can be integrated with Git repositories (Azure DevOps or GitHub) to manage and track changes to various Fabric artifacts like notebooks, reports, and data pipelines."
    },
    {
        id: 30,
        question: "What are the benefits of using deployment pipelines in Microsoft Fabric?",
        answer: "Deployment pipelines enable efficient and controlled promotion of Fabric items (e.g., reports, datasets, dataflows) across development, test, and production environments, ensuring consistency and reliability."
    }
];

// Export for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = flashcards;
}

