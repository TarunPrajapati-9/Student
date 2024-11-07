export type SSCFormSchema = {
  ssc_name: string;
  ssc_board: string;
  ssc_passing_year: number;
  ssc_per: number;
  ssc_cpi: number;
};

export type HSCSchema = {
  physics: string;
  math: string;
  chemistry: string;
  total_mark: string;
  obtain_mark: string;
  gap_10_12: string;
  hsc_board: string;
  hsc_passing_year: string;
  hsc_per: string;
  hsc_cpi: string;
  jee_percentile: string;
  gujcet_score: string;
  gujcet_physics: string;
  gujcet_math: string;
  gujcet_chem: string;
  gujcet_percentile: string;
  gujcet_total: string;
};

export type DiplomaSchema = {
  ddcet_score: string;
  diploma_branch: string;
  diploma_uni: string;
  diploma_passing_year: string;
  gap_10_diploma: string;
  diploma_cpi: string;
  diploma_cgpa: string;
  diploma_per: string;
  diploma_dead_back: string;
};

export type BEFormSchema = {
  admission_based_on: string;
  be_uni: string;
  be_passing_year: string;
  be_branch: string;
  be_sem1_spi: string;
  be_sem2_spi: string;
  be_sem3_spi: string;
  be_sem4_spi: string;
  be_sem5_spi: string;
  be_sem6_spi: string;
  be_sem7_spi: string;
  be_sem8_spi: string;
  be_cpi: string;
  be_cgpa: string;
  be_dead_back: string;
  be_live_back: string;
  // be_total_back: string;
  gap_12_dip_BE: string;
};

export type MESchema = {
  gate_score: string;
  pgcet_score: string;
  me_passing_year: string;
  me_branch: string;
  me_specialization: string;
  me_sem1_spi: string;
  me_sem2_spi: string;
  me_sem3_spi: string;
  me_sem4_spi: string;
  me_cpi: string;
  me_dead_back: string;
  me_live_back: string;
  me_total_back: string;
  gap_be_me: string;
};

export type MCAFormSchema = {
  ug_passing_year: string;
  ug_uni: string;
  ug_sem1_per: string;
  ug_sem2_per: string;
  ug_sem3_per: string;
  ug_sem4_per: string;
  ug_sem5_per: string;
  ug_sem6_per: string;
  ug_sem7_per: string;
  ug_sem8_per: string;
  ug_per: string;
  ug_dead_back: string;
  ug_branch: string;
  gap_ug_pg: string;
  gap_12_ug: string;

  pg_passing_year: string;
  pg_sem1_spi: string;
  pg_sem2_spi: string;
  pg_sem3_spi: string;
  pg_sem4_spi: string;
  pg_cpi: string;
  pg_live_back: string;
  pg_dead_back: string;
  pg_total_back: string;
  pg_specialization: string;
};
