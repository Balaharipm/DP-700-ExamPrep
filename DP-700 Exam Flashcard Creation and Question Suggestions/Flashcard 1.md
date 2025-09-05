Flashcard 1
Q: What are the three main categories of questions on the DP-700 exam?
A: Implementing and managing analytic solutions, ingesting and transforming data, and monitoring and optimizing analytic solutions (with roughly equal weighting).

Flashcard 2
Q: Why is the DP-700 certification valuable for data engineers?
A: It provides a structured way to learn, demonstrates foundational expertise, helps with job prospects and pay (especially in consultancies), and recognizes in-demand data engineering skills.

Flashcard 3
Q: What skills are increasingly important for data engineers due to current market trends?
A: Skills in data engineering for both BI and AI, as organizations require reliable, well-structured data for decision making and AI applications.

Flashcard 4
Q: What is orchestration in Microsoft Fabric, and what tools are commonly used?
A: Orchestration refers to automating and managing data workflows. Tools include data pipelines, notebooks, Airflow integration, and using activities to trigger data movement, transformation, and model refreshes.

Flashcard 5
Q: What are key differences between Lakehouse, Warehouse, and Eventhouse in Fabric?
A: - Lakehouse: Optimized for Spark code, unstructured and structured data, file & table storage.

Warehouse: SQL-based, structured/tabular data, supports transactions.

Eventhouse: Real-time, KQL (Kusto), for streaming data and time-series/events.

Flashcard 6
Q: How is access control managed in Microsoft Fabric?
A: Access can be granted at multiple levels: workspace, item, object, row, and column (with roles like Admin, Member, Contributor, Viewer).

Flashcard 7
Q: What is the principle of 'least privilege', and how does it apply to Fabric security?
A: Give users only the minimum access necessary for their job—share at the lowest required level (item/object) instead of the workspace when possible.

Flashcard 8
Q: What methods can you use for ingestion and transformation in Fabric?
A: Data pipelines (orchestration, basic transformations), data flows (Power Query/M), notebooks (Spark/PySpark), T-SQL (for warehouses), shortcuts and mirroring (for minimal development).

Flashcard 9
Q: When should you use 'shortcuts' or 'mirroring' in Fabric?
A: When you want to avoid ETL and just expose or replicate external datasets (like S3, ADLS) directly into a Lakehouse.

Flashcard 10
Q: What is 'Dynamic Data Masking,' and what is its purpose?
A: A feature to obfuscate sensitive data in result sets, using masking functions (default, email, random, partial) when querying via T-SQL, but not a substitute for access control.

Flashcard 11
Q: What are common orchestration patterns in Fabric Data Pipelines?
A: Patterns include full load, incremental load, metadata-driven loops (for scalable ingestion), parent-child pipeline invocation, error handling with notifications, and using session tags for Spark resource optimization.

Flashcard 12
Q: What should you know about version control (Git) in Fabric?
A: Only some artifacts are tracked (not data, files, or refresh schedules), and deployment pipelines rely on source control for repeatability. Know how to set up and connect Fabric workspaces to Azure DevOps or GitHub.

Flashcard 13
Q: What is SCD Type 2, and why is it used?
A: Slowly Changing Dimension Type 2 tracks historical changes to dimensional data by inserting new rows for changes and maintaining valid from/to dates.

Flashcard 14
Q: What is the purpose of sensitivity labels and endorsements (e.g., Certified, Master Data) in Fabric?
A: They help with data governance by identifying, protecting, and promoting high-quality and core datasets for compliance and organizational trust.

Flashcard 15
Q: Name three types of window aggregations in event/streaming data in Fabric.
A: Tumbling window (fixed, non-overlapping), Hopping window (fixed, overlapping), and Sliding window (overlapping, moving continuously).





Flashcard 16
Q: What is the primary purpose of Microsoft Fabric?
A: Microsoft Fabric is an all-in-one analytics solution for enterprises that covers everything from data movement to data science, Real-Time Analytics, and business intelligence (BI).

Flashcard 17
Q: Explain the concept of OneLake in Microsoft Fabric.
A: OneLake is a single, unified, logical data lake for the entire organization within Microsoft Fabric. It eliminates data silos and provides a single source of truth for all data.

Flashcard 18
Q: What are the different personas supported by Microsoft Fabric?
A: Data Engineer, Data Scientist, Data Warehouse Developer, Business Intelligence Professional, and Data Analyst.

Flashcard 19
Q: How does Microsoft Fabric support real-time analytics?
A: Through its Eventhouse and Real-Time Analytics capabilities, which allow for ingestion, processing, and analysis of streaming data using Kusto Query Language (KQL).

Flashcard 20
Q: What is a Lakehouse in Microsoft Fabric, and what are its advantages?
A: A Lakehouse is an architecture that combines the best features of data lakes and data warehouses. It offers flexibility for unstructured data like a data lake and the ACID transactions and schema enforcement of a data warehouse.

Flashcard 21
Q: Describe the role of Data Pipelines in Microsoft Fabric.
A: Data Pipelines are used for orchestrating and automating data movement and transformation activities, enabling the creation of robust ETL/ELT workflows.

Flashcard 22
Q: What is the significance of Spark in Microsoft Fabric?
A: Spark is a core compute engine in Fabric, especially within Lakehouses and Notebooks, used for large-scale data processing, transformation, and analytics.

Flashcard 23
Q: How does Microsoft Fabric ensure data security and compliance?
A: Through features like role-based access control (RBAC), row-level security (RLS), column-level security (CLS), dynamic data masking, and sensitivity labels.

Flashcard 24
Q: What is the purpose of Dataflows Gen2 in Microsoft Fabric?
A: Dataflows Gen2 are used for self-service data preparation and transformation, leveraging Power Query (M language) to ingest and transform data from various sources.

Flashcard 25
Q: How can you monitor data engineering solutions in Microsoft Fabric?
A: Monitoring can be done through Fabric's monitoring hub, Spark UI, Kusto Query Language (KQL) for real-time analytics, and integration with Azure Monitor and Log Analytics.

Flashcard 26
Q: What is the difference between a Data Warehouse and a Lakehouse in Fabric in terms of data storage?
A: A Data Warehouse in Fabric primarily stores structured, tabular data optimized for SQL queries, while a Lakehouse stores both structured and unstructured data in open formats like Parquet, optimized for Spark.

Flashcard 27
Q: Explain the concept of shortcuts in Microsoft Fabric.
A: Shortcuts allow you to create a logical link to data stored in other locations (e.g., Azure Data Lake Storage Gen2, Amazon S3) without physically moving or duplicating the data into OneLake.

Flashcard 28
Q: What is the role of notebooks in Microsoft Fabric?
A: Notebooks provide an interactive environment for data engineers and data scientists to write and execute code (Python, Scala, Spark SQL, R) for data exploration, transformation, and model training.

Flashcard 29
Q: How does version control integrate with Microsoft Fabric?
A: Fabric workspaces can be integrated with Git repositories (Azure DevOps or GitHub) to manage and track changes to various Fabric artifacts like notebooks, reports, and data pipelines.

Flashcard 30
Q: What are the benefits of using deployment pipelines in Microsoft Fabric?
A: Deployment pipelines enable efficient and controlled promotion of Fabric items (e.g., reports, datasets, dataflows) across development, test, and production environments, ensuring consistency and reliability.


